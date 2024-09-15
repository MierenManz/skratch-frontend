import DefaultSidebar from "../layout/sidebar";
import Label from "../codeblocks/Label";

function Editor() {
  return <div className="bg-dark w-100 text-light">
    halp
  </div>;
}

function Sidebar() {
  return (
    <DefaultSidebar>
      <Label name="STOOPID"/>
    </DefaultSidebar>
  );
}

export default function Window() {
  return (
    <>
      <Sidebar />
      <Editor />
    </>
  );
}
