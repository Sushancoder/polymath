import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image src="/logo.png" alt="PolyMath Logo" height={60} width={60} />
    </div>
  );
}

export default Logo;
