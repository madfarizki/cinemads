import { Tab, TabList, Tabs as TabWrapper, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  data: string[];
  onTabChange: (tab: string, idx: number) => void;
};

function Tabs({ data, onTabChange }: Props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab: string, idx: number) => {
    setSelectedTab(idx);
    onTabChange(tab, idx);
  };

  return (
    <TabWrapper variant="solid-rounded" colorScheme="yellow">
      <TabList>
        {data.map((tab, idx) => (
          <Tab key={idx} onClick={() => activeTab(tab, idx)}>
            <Text fontSize="lg" fontWeight="bold">
              {tab}
            </Text>
          </Tab>
        ))}
      </TabList>
    </TabWrapper>
  );
}

export default Tabs;
