import CustomLink from "@/components/custom-link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">🚀NextAuth.js Tutorial</h1>
      <div>
        <CustomLink href="/server-example" className="underline">
          서버
        </CustomLink>
        와{' '}
        <CustomLink href="/client-example" className="underline">
          클라이언트
        </CustomLink>
        의 예시를 보고, 페이지를 보호하고 세션 데이터를 취득하는 방법을 확인해보세요.
      </div>
      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
