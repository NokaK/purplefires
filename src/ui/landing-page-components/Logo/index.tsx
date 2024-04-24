import Link from "next/link";

const Logo = ({ color }: { color: string }) => {
  return (
    <Link href="/" className="logo" style={{ color: color }}>
      antic
    </Link>
  );
};
export default Logo;
