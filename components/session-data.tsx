import { Session } from "next-auth";

export default function SessionData({ session }: { session: Session | null }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold">현재 세션 데이터</h2>
      <p>
        이 예시에서는 기밀정보를 공개하지 않기 위해 사용자 객체의 일부 필드만 페이지에 전달됩니다.
      </p>
      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">Current Session</div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
