import React, { createContext, useContext, useState, ReactNode } from "react";

interface TreeContextProps {
  treeData: string | null;
  setTreeData: (json: string | null) => void;
}

const TreeContext = createContext<TreeContextProps | undefined>(undefined);

export const useTreeContext = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTreeContext must be used within a TreeProvider");
  }
  return context;
};

interface TreeProviderProps {
  children: ReactNode;
}

export const TreeProvider: React.FC<TreeProviderProps> = ({ children }) => {
  const [treeData, setTreeData] = useState<string | null>(null);

  return (
    <TreeContext.Provider value={{ treeData, setTreeData }}>
      {children}
    </TreeContext.Provider>
  );
};
