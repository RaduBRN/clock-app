import Greeting from "./Greeting";
import Time from "./Time";
import Location from "./Location";

function Dashboard() {
  return (
    <div className="absolute md:static top-[10vh] flex flex-col gap-2">
      <Greeting />
      <Time />
      <Location />
    </div>
  );
}

export default Dashboard;
