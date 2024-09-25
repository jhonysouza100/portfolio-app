import Image from "next/image";
import Button from "./ui/Button";
import { RiCheckboxCircleLine, RiLink } from "@remixicon/react";

export default function Main() {
  return (
    <main className="main">
      <section className="filters section-container">
        {/*=============== FILTERS TABS data-target ===============*/}
        {/* data-target */}
        <ul className="filters_content mt-8 mb-10 bg-foreground-lighten p-[0.375rem] rounded-xl flex justify-between gap-x-2 md:w-[332px] sm:my-12 md:mx-auto">
          <Button className="filters_button p-4 w-full text-foreground text-[0.813rem] lg:text-sm font-medium bg-neutral-50/0 rounded-xl hover:bg-background filter-tab-active" data-target="#projects">Projects</Button>
          <Button className="filters_button p-4 w-full text-foreground text-[0.813rem] lg:text-sm font-medium bg-neutral-50/0 rounded-xl hover:bg-background" data-target="#skills">Skills</Button>
        </ul>
        {/* data-content */}
        <div className="filters_sections">
          {/*=============== PROJECTS ===============*/}
          <div className="projects_content grid gap-6 filters_active md:justify-center md:grid-cols-a lg:gap-x-8 lg:gap-y-12" data-content="" id="projects">
            <article className="projects_card relative rounded-2xl overflow-hidden">
              <Image className="projects_img w-full h-full" src="/img/project1.png" alt="Project image" width={500} height={500} />
              <div className="projects_modal absolute w-full h-full -bottom-full left-0 shading-2 grid items-end py-6 px-5 transition-all duration-300 lg:p-6">
                <div>
                  <span className="projects_subtitle text-white">Web</span>
                  <h3 className="projects_title text-white mb-3">Cristmas Landing Page</h3>
                  <a className="projects_button button_small p-2 text-white bg-primary inline-flex rounded-lg" href="https://responsive-cristmas-website.netlify.app/" target="_blank"><RiLink /></a>
                </div>
              </div>
            </article>
            
          </div>
          {/*=============== SKILLS ===============*/}
          <div className="skills_content grid gap-6 gap-y-14 md:grid-cols-a md:justify-center md:gap-x-12" data-content="" id="skills">
            <div className="skills_area">
              <h3 className="skills_title text-center mb-6 lg:mb-10">Frontend Developer</h3>
              <div className="skills_box gap-x-4 flex justify-center sm:gap-x-12">
                <div className="skills_group grid content-start gap-y-4">
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">HTML</h3>
                      <span className="skils_level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">CSS</h3>
                      <span className="skils_level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">JavaScript</h3>
                      <span className="skils_level">Advanced</span>
                    </div>
                  </div>
                </div>
                <div className="skills_group grid content-start gap-y-4">
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">React</h3>
                      <span className="skils_level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">Bootstrap</h3>
                      <span className="skils_level">Basic</span>
                    </div>
                  </div>
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">Git</h3>
                      <span className="skils_level">Advanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills_area">
              <h3 className="skills_title text-center mb-6 lg:mb-10">Backend Developer</h3>
              <div className="skills_box gap-x-4 flex justify-center gap-x-12">
                <div className="skills_group grid content-start gap-y-4">
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">PHP</h3>
                      <span className="skils_level">Basic</span>
                    </div>
                  </div>
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">MySQL</h3>
                      <span className="skils_level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">Java</h3>
                      <span className="skils_level">Intermediate</span>
                    </div>
                  </div>
                </div>
                <div className="skills_group grid content-start gap-y-4">
                  <div className="skills_data flex gap-x-2">
                    <i className="ri-close-circle-line no-checked" />
                    <div>
                      <h3 className="skills_name">Pyton</h3>
                      <span className="skils_level">Coming soon</span>
                    </div>
                  </div>
                  <div className="skills_data flex gap-x-2">
                    {/* <i class="ri-leaf-line learning"></i> */}
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">Node Js</h3>
                      <span className="skils_level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data flex gap-x-2">
                    <RiCheckboxCircleLine className="text-primary" />
                    <div>
                      <h3 className="skills_name">Express</h3>
                      <span className="skils_level">Basic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}