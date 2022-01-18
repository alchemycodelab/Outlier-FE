import { useActiveStates } from "../../context/Profile/StateCtx";

export default function Resources() {
  const { activeStates } = useActiveStates();
  return (
    <>
      <h1> Resources Page </h1>
      <h2>{activeStates[0]}</h2>
      <h2>{activeStates[1]}</h2>
    </>
  );
}