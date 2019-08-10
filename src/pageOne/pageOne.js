import React from "react";
import { asset, Pano, Text, View, VrButton } from "react-vr";

let randomHex = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default class PageOne extends React.Component {
  state = {
    color: ""
  };

  componentDidMount() {
    console.log(this.state.color);
    this.loadBackground();
  }

  loadBackground() {
    setInterval(() => {
      randomHex();
      this.setState({
        color: randomHex()
      });
      console.log(this.state.color);
    }, 500);
  }

  render() {
    return (
      <View>
        <Pano source={asset("360_world.jpg")} />
        <VrButton
          onClick={() => {
            this.props.history.push("./pageTwo");
          }}
        >
          <Text
            style={{
              backgroundColor: this.state.color,
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
            Página: 1 => cliquei para ir para pagina 2
          </Text>
        </VrButton>
      </View>
    );
  }
}
