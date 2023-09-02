import Protected from "../components/protected"

export default function ProfileLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>
            <Protected>
                {children}
            </Protected>
        </section>
    )
  }