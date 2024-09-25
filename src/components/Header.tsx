import { RiDownloadLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMessengerLine, RiMoonLine, RiWhatsappLine } from "@remixicon/react";
import Image from "next/image";
import Button from "@/ui/Button";

export default function Header() {
  return (
    <header className="profile section-container relative pt-14 lg:pt-16">
      {/* Theme button */}
      <Button className="change_theme absolute top-[1.5rem] right-[1.5rem] text-foreground hover:text-primary rounded-full p-1 lg:top-10 lg:right-10">
        <RiMoonLine id="theme-button" />
      </Button>
      {/* Profile data */}
      <div className="profile_container grid gap-6 gap-y-8">

        <div className="profile_data grid text-center">
          <div className="profile_border border-[3.5px] border-primary justify-self-center w-[115px] h-[115px] rounded-full grid place-items-center mb-3 lg:w-[135px] lg:h-[135px] lg:mb-4">
            <div className="profile_perfil w-[100px] h-[100px] gradient-bg rounded-full overflow-hidden flex items-center justify-center lg:w-[120px] lg:h-[120px]">
              <Image className="w-[75px] lg:w-[90px]" src="/img/perfil.png" alt="Profile image" width={500} height={500} />
            </div>
          </div>
          <h2 className="profile_name">Jhony Souza</h2>
          <span className="profile_profession font-medium mb-4 lg:mb-6">Web developer</span>
          <ul className="profile_social flex justify-center gap-x-3">
            <a className="profile_social-link rounded-full text-foreground hover:text-primary" href="https://www.instagram.com/jhonysouza100/" target="_blank"><RiInstagramLine /></a>
            <a className="profile_social-link rounded-full text-foreground hover:text-primary" href="https://linkedin.com/" target="_blank"><RiLinkedinLine/></a>
            <a className="profile_social-link rounded-full text-foreground hover:text-primary" href="https://github.com/WarDog1000" target="_blank"><RiGithubLine /></a>
          </ul>
        </div>

        <div className="profile_info grid gap-6 grid-cols-max3 justify-center gap-x-6 sm:gap-x-10 lg:gap-x-12">
          <div className="profile_info-group text-center">
            <h3 className="profile_info-number text-[0.938rem] lg:text-base mb-1">1</h3>
            <span className="profile_info-description font-medium lg:text-sm">Year of<br />work</span>
          </div>
          <div className="profile_info-group text-center">
            <h3 className="profile_info-number text-[0.938rem] lg:text-base mb-1">3</h3>
            <span className="profile_info-description font-medium lg:text-sm">Certifications<br /></span>
          </div>
          <div className="profile_info-group text-center">
            <h3 className="profile_info-number text-[0.938rem] lg:text-base mb-1">3</h3>
            <span className="profile_info-description font-medium lg:text-sm">Projects<br /></span>
          </div>
        </div>

        <div className="profile_buttons flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-4 lg:gap-x-8">
          {/* Insert your CV */}
          <div className="outer">
            {/* from RGB-effect */}
            <a  download="" href="">
              <Button className="bg-primary shadow-blur text-white hover:bg-primary-muted">
                Download CV <RiDownloadLine className="w-4 h-4 md:h-6 md:w-6" />
              </Button>
            </a>
            <span />
            <span />
          </div>
          <div className="profile_buttons-small flex items-center justify-center gap-x-1">
            <a href="https://api.whatsapp.com/send?phone=543757501633&text=Hello, let's go to work" target="_blank">
              <Button className="button_small button_gray p-3 text-foreground bg-foreground-lighten hover:bg-foreground-light">
                <RiWhatsappLine />
              </Button>
            </a>
            <a href="https://m.me/jhon.souza.7547" target="_blank">
              <Button className="button_small button_gray p-3 text-foreground bg-foreground-lighten hover:bg-foreground-light">
                <RiMessengerLine />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
