import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Tab,
  Tabs,
} from "native-base";
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";

export default function TabsExample() {
  return (
    <Container>
      <Header hasTabs style={styles.header}>
        <Left />
        <Body>
          <Title>News App</Title>
        </Body>
        <Right />
      </Header>
      <Tabs tabBarUnderlineStyle={styles.underline}>
        <Tab
          tabStyle={styles.header}
          activeTabStyle={styles.header}
          textStyle={styles.text}
          activeTextStyle={styles.text}
          heading="General"
        >
          <Tab1 />
        </Tab>
        <Tab
          tabStyle={styles.header}
          activeTabStyle={styles.header}
          textStyle={styles.text}
          activeTextStyle={styles.text}
          heading="Business"
        >
          <Tab2 />
        </Tab>
        <Tab
          tabStyle={styles.header}
          activeTabStyle={styles.header}
          textStyle={styles.text}
          activeTextStyle={styles.text}
          heading="Technology"
        >
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#009387",
  },
  underline: {
    backgroundColor: "#fff",
  },
  text: {
    color: "white",
  },
});
