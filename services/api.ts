export async function fetchExample(): Promise<{ message: string }> {
  const res = await fetch('/api/example')
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json()
}
