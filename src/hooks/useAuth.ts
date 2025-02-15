type User = {
  role: "admin" | "user";
};

const useAuth = () => {
  const user: User = {
    role: "admin",
  };

  return { user };
};

export default useAuth;
