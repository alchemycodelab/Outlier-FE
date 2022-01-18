import { useActiveStates } from "../../context/Profile/StateCtx";
import ThreeScene from "../../components/Three/ThreeScene";

export default function Data() {
  const {activeStates } = useActiveStates();
  return (
    <>
      <h1> Data Page </h1>
      <h2>{activeStates[0]}</h2>
      <h2>{activeStates[1]}</h2>
      <ThreeScene />
    </>
  );
};
