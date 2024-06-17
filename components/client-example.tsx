"use client";

import CustomLink from "./custom-link";
import { useSession } from "next-auth/react";

export default function ClientExample() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">클라이언트 사이드 렌더링</h1>
      <p>
        이 페이지에서는{' '}
        <CustomLink href="https://nextjs.authjs.dev/react#usesession">
          <code>useSession</code>
        </CustomLink>
        {' '}React Hook을 사용하여 클라이언트 측에서 세션 데이터를 취득합니다.
      </p>
      <p>
        이 기능을 사용하기 위해서는 파일 시작 부분에{' '}
        <CustomLink href="https://react.devreference/nextjs/react/use-client">
          <code>use client</code>
        </CustomLink>
        {' '}지시어가 필요합니다.<br/>
        또한 세션 데이터를 제공하기 위해서는{' '}
        <strong>
          <code>client-example/page.tsx</code>
        </strong>
        에{' '}
        <CustomLink href="https://nextjs.authjs.dev/react#sessionprovider">
          <code>SessionProvider</code>
        </CustomLink>
        {' '}컴포넌트가 필요합니다.
      </p>
      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {
            status === 'loading'
            ? <div>Loading...</div>
            : JSON.stringify(session, null, 2)
          }
        </pre>
      </div>
    </div>
  );
}
