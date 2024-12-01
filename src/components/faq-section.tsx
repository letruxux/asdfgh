const qa = [
  [
    "How do i run this?",
    <p key={1}>
      Open a <code>command prompt</code>, paste the code and press enter.
    </p>,
  ],
] as const;

export default function FaqSection() {
  return (
    <div className="join join-vertical w-full">
      {qa.map(([q, a]) => (
        <div key={q} className="collapse collapse-arrow join-item">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">{q}</div>
          <div className="collapse-content">{a}</div>
        </div>
      ))}
    </div>
  );
}
