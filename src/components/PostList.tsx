import React from "react";

const names: { nome: string; message: string }[] = [
  {
    nome: "Sarah",
    message: "bucetossauros rex",
  },
  {
    nome: "Caterpi",
    message: "pipipipippipi",
  },
  {
    nome: "Max",
    message: "Bex :3",
  },
];

function PostList() {
  return (
    <>
      <section className="flex flex-col space-y-4">
        {names.map((names) => {
          return (
            <div className="flex flex-col bg-bexdark w-[64rem] p-3">
              <div className="">
                <h2 className="text-bexpurplemedium">{names.nome}:</h2>
              </div>
              <div className="">
                <h2 className="text-bexpurplelight">{names.message}</h2>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default PostList;
