"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);
const USERS_KEY = "gusteaux-users";
const SESSION_KEY = "gusteaux-session";

function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (e) {
    // ignore storage write errors
  }
}

// A demo admin account always exists so dish management can be tried
// immediately: admin@gusteaus.paris / gusteaus123
function ensureDemoAdmin(users) {
  if (users.some((u) => u.email === "admin@gusteaus.paris")) return users;
  return [
    ...users,
    {
      id: "demo-admin",
      name: "Head Chef",
      email: "admin@gusteaus.paris",
      password: "gusteaus123",
      role: "admin",
    },
  ];
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const users = ensureDemoAdmin(loadUsers());
    saveUsers(users);

    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) {
        const session = JSON.parse(raw);
        const match = users.find((u) => u.id === session.id);
        if (match) setUser(sanitize(match));
      }
    } catch (e) {
      // ignore malformed session
    }
    setReady(true);
  }, []);

  function sanitize(u) {
    if (!u) return null;
    const { password, ...rest } = u;
    return rest;
  }

  const value = useMemo(() => {
    const signup = ({ name, email, password, role = "customer" }) => {
      const users = loadUsers();
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        return { success: false, error: "An account with this email already exists." };
      }
      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        password,
        role,
      };
      const updated = [...users, newUser];
      saveUsers(updated);
      localStorage.setItem(SESSION_KEY, JSON.stringify({ id: newUser.id }));
      setUser(sanitize(newUser));
      return { success: true };
    };

    const login = ({ email, password }) => {
      const users = loadUsers();
      const match = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      if (!match) {
        return { success: false, error: "Incorrect email or password." };
      }
      localStorage.setItem(SESSION_KEY, JSON.stringify({ id: match.id }));
      setUser(sanitize(match));
      return { success: true };
    };

    const logout = () => {
      localStorage.removeItem(SESSION_KEY);
      setUser(null);
    };

    return {
      user,
      ready,
      isAuthenticated: !!user,
      isAdmin: user?.role === "admin",
      signup,
      login,
      logout,
    };
  }, [user, ready]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
