export interface UserProfile {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const PROFILES_STORAGE_KEY = "scrutinyx-user-profiles";
const CURRENT_USER_STORAGE_KEY = "scrutinyx-current-user";

export const getUserProfiles = (): UserProfile[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedProfiles = window.localStorage.getItem(PROFILES_STORAGE_KEY);
    return storedProfiles ? (JSON.parse(storedProfiles) as UserProfile[]) : [];
  } catch (error) {
    console.error("Unable to read stored profiles", error);
    return [];
  }
};

export const saveUserProfile = (profile: Omit<UserProfile, "id" | "createdAt">): UserProfile => {
  const existingProfiles = getUserProfiles();
  const email = profile.email.trim().toLowerCase();

  const duplicateProfile = existingProfiles.some((item) => item.email.toLowerCase() === email);
  if (duplicateProfile) {
    throw new Error("An account with this email already exists.");
  }

  const newProfile: UserProfile = {
    id: window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    ...profile,
    email,
    createdAt: new Date().toISOString(),
  };

  const updatedProfiles = [newProfile, ...existingProfiles];
  window.localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(updatedProfiles));
  setCurrentUserProfile(newProfile);

  return newProfile;
};

export const findUserProfileByCredentials = (email: string, password: string): UserProfile | null => {
  const profiles = getUserProfiles();
  const normalizedEmail = email.trim().toLowerCase();

  return profiles.find((profile) => profile.email.toLowerCase() === normalizedEmail && profile.password === password) ?? null;
};

export const getCurrentUserProfile = (): UserProfile | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedUser = window.localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    return storedUser ? (JSON.parse(storedUser) as UserProfile) : null;
  } catch (error) {
    console.error("Unable to read current user", error);
    return null;
  }
};

export const setCurrentUserProfile = (profile: UserProfile | null) => {
  if (typeof window === "undefined") {
    return;
  }

  if (!profile) {
    window.localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(profile));
};

export const clearCurrentUserProfile = () => {
  setCurrentUserProfile(null);
};
