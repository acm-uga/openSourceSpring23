import React from 'react';
import './MainTheme.css';

const TabContext = React.createContext();

function CardTab({ children }) {
  const [activeTab, setActiveTab] = React.useState(1);

  const setTab = tab => {
    setActiveTab(tab);
  };

  return (
    <TabContext.Provider value={{ activeTab, setTab }}>
      <div className="">{children}</div>
    </TabContext.Provider>
  );
}

function TabSwitcher({ children, tabId, activeClass = 'selected-tab' }) {
  const { activeTab, setTab } = React.useContext(TabContext);

  const onClick = () => setTab(tabId);

  const className = ['tab-links'];
  if (activeTab === tabId) className.push(activeClass);
  return (
    <button className={className.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
}

function TabContent({ children, id }) {
  const { activeTab } = React.useContext(TabContext);
  return id === activeTab ? children : null;
}

export { CardTab, TabSwitcher, TabContent };
