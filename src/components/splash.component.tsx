import React, { FC, useEffect, useRef } from "react";
import { Animated, Modal, Image, Dimensions, View } from "react-native";
import LogoWhite from "../../assets/logo-white.svg";

type Props = {
  visible: boolean;
  onFinish: () => void;
};

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

export const Splash: FC<Props> = ({ visible, onFinish }) => {
  const moveAnim = useRef(new Animated.Value(-40)).current;
  const fadeinAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),

      Animated.timing(fadeinAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        onFinish();
      }
    });
  }, [moveAnim]);

  return (
    <Modal visible={visible}>
      <Animated.View
        style={{
          width: ScreenWidth + 40,
          height: "100%",
          transform: [
            {
              translateX: moveAnim,
            },
          ],
        }}
      >
        <Image
          source={require("../../assets/splash-bg.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          paddingTop: Math.floor(ScreenHeight / 3),
          opacity: fadeinAnim,
        }}
      >
        <LogoWhite />
      </Animated.View>
    </Modal>
  );
};
