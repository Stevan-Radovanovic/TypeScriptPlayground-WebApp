export default interface Project {
  id: string;
  title: string;
  description: string;
  people: number;
  status: "active" | "finished";
}
