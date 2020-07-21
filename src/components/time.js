//import liraries
import React from "react";
import { Text } from "native-base";
import moment from "moment";

const Time = (props) => {
  const date = props.time;
  const time = moment(date || moment.now()).fromNow();
  return (
    <Text note style={{ marginHorizontal: 10 }}>
      {time}
    </Text>
  );
};

export default Time;
