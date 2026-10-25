import Coba from "./coba";
import Ini from "./ini";

export default function Message() {
  const name = "austin";
  if (name)
    return (
      <div>
        <Coba />
        {name}
      </div>
    );
  return <Ini />;
}
