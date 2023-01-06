import Door from "../components/Door";
import Present from "../components/present";

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
      <Door />
      <Door />
    </div>
  );
}