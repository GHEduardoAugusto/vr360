import React from "react";
import { asset, Pano, Text, View, VrButton } from "react-vr";

export default class PageTwo extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("360_world.jpg")} />
        <VrButton
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          <Text
            style={{
              backgroundColor: "red",
              fontSize: 0.4,
              fontWeight: "400",
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: "center",
              textAlignVertical: "center",
              transform: [{ translate: [0, 0, -3] }]
            }}
          >
            Página: 2
          </Text>
        </VrButton>
      </View>
    );
  }
}
