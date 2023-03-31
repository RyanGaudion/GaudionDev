import Link from "next/link";

export default function CustomLink(props : any){
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/'));// || href.startsWith('#'));
    const isAnchorLink = href && (href.startsWith('#'));

    //TODO - Change back Url # handling not supported yet - https://beta.nextjs.org/docs/app-directory-roadmap

    if (isInternalLink) {
      return (
        <Link href={href}>
          {props.children}
        </Link>
      );
    }
    if(isAnchorLink){
      return <a {...props} />
    }
  
    return <a target="_blank" {...props} />;
  };