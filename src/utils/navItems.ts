import {
  PiBuilding,
  PiStudent,
  PiArrowsClockwise ,
  PiChartLine,
  PiBell,
  PiGear,
  PiFileDuotone ,
  PiSpeedometerFill 
} from "react-icons/pi";

export const navItems = [
  { label: "Dashboard", icon: PiSpeedometerFill, path: '/', key: "dashboard" },
  { label: "Schools", icon: PiBuilding, path: '/schools', key: "schools"},
  { label: "Licenses", icon: PiFileDuotone, path: '/licenses', key: "licenses" },
  { label: "Students", icon: PiStudent, path: '/students', key: "students" },
  { label: "Transfers", icon: PiArrowsClockwise, path: '/transfers', key: "transfers" },
  { label: "Reports", icon: PiChartLine, path: '/reports', key: "reports" },
  { label: "Notifications", icon: PiBell, path: '/notifications', key: "notifications" },
  { label: "Settings", icon: PiGear, path: '/settings', key: "settings" },
];