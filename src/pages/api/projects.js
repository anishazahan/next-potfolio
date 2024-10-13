// import { NextResponse } from "next/server";
// import { skillData } from "../../components/Skills/data";

// export async function GET() {
//   return NextResponse.json(skillData);
// }

import { data } from "../../components/Projects/data";

export default function handler(req, res) {
  res.status(200).json(data);
}
