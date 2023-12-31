import Image from "next/image";

function Logo() {
  return (
    <Image
      className="hidden sm:block"
      placeholder="blur"
      blurDataURL={"/logo.png"}
      src={"/logo.png"}
      alt="Logo"
      width={100}
      height={100}
    />
  );
}

export default Logo;
