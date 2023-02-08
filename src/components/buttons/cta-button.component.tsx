import { FC } from "react";
import { Button } from "./button.component";
import { latestPlanQuery } from "~stores/plan";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { styles } from "./cta-button.styles";

type Props = {
  onPress: () => void;
};

export const CtaButton: FC<Props> = ({ onPress }) => {
  const loadableTravelPlan = useRecoilValueLoadable(latestPlanQuery);

  if (loadableTravelPlan.state === "loading") {
    return <></>;
  }

  if (
    !loadableTravelPlan.contents.state.isEffectivePlan ||
    !loadableTravelPlan.contents.state.hasPlan
  ) {
    const title = !loadableTravelPlan.contents.state.hasPlan
      ? "✏ 여행 계획을 세워볼까요?"
      : "✏여행 종료! 새 여행을 시작해봐요 🤩";

    return (
      <Button
        title={title}
        buttonStyle={styles.button}
        textStyle={styles.text}
        onPress={onPress}
      />
    );
  }
  return null;
};
