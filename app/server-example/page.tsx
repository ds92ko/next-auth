import CustomLink from "@/components/custom-link";
import SessionData from "@/components/session-data";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">React Server Component를 다루는 방법</h1>
      <p>
        이 페이지는{' '}
        <CustomLink href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
          React Server Component
        </CustomLink>
        의 ServerComponent로 표시됩니다.<br/>
        <CustomLink href="https://nextjs.authjs.dev#auth">
          <code>auth()</code>
        </CustomLink>
        {' '}method를 이용하여 session을 취득하고 있습니다.
      </p>
      <SessionData session={session}/>
    </div>
  );
}
