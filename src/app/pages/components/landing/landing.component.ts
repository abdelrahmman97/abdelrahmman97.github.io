import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceComponent } from "../../../features/components/experience/experience.component";
import { AsideComponent } from "../../../shared/components/aside/aside.component";
import { LatestProjectsComponent } from "../../../features/components/latest-projects/latest-projects.component";
import { SkillsComponent } from "../../../features/components/skills/skills.component";
import { EducationComponent } from "../../../features/components/education/education.component";
import { ToolsComponent } from "../../../features/components/tools/tools.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component( {
	selector: 'app-landing',
	standalone: true,
	imports: [
    CommonModule,
    ExperienceComponent,
    AsideComponent,
    LatestProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ToolsComponent,
    HeaderComponent
],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
} )
export class LandingComponent { }
