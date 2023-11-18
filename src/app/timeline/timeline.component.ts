import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  timelineData = [
    {
      title: 'Senior Software Engineer at eCERTO (Contract)',
      date: 'October 2023 - January 2024',
      description: [
        'Managed and directed the technology team, instituting new software development practices upon transitioning development operations in house.',
        'Provided leadership and guidance to Junior and Associate engineers, mentoring them in best practices and conducting comprehensive code reviews to maintain high standards of work.',
        'Oversaw sprint planning sessions and effectively coordinated development activities within the team, ensuring alignment with management objectives and broader strategic goals.',
        'Played a pivotal role in launching the Lite version of the software, contributing significantly to the strategic objectives of the company.',
        'Applied React and .NET 7 expertise to enhance application features, refine the existing codebase, and bolster application resilience. Employed key UI/UX principles to optimise user experiences throughout development cycles.',
      ],
    },
    {
      title: 'Software Developer at AEON Geoscience Systems',
      date: 'September 2022 - August 2023',
      description: [
        'Extensively worked with React and Ruby on Rails to upgrade and extend the existing PROEX web application. Including developing new components, implementing bug fixes, and improving application performance.',
        'Utilised D3.js package to create multiple graphs, well log tracks, and data dashboards to enable the visualization and comparison of complicated datasets as part of a £70k+ client project prior to my redundancy.',
        'Revamped the visual design of the application with Figma as a rapid prototyping tool, working within a company-standard design template.',
        'Implemented a completely new self-sign up process including email confirmation using SendGrid',
        'Established complete build, linting, and testing pipelines as well as docker containerization of the application.',
      ],
    },
    {
      title: 'IT & Business Support at DK AVS',
      date: 'June 2018 - September 2022',
      description: [
        'Worked extensively in React, HTML, CSS, ES2023 JavaScript, and Redux, to enhance company web systems, including improved user interfaces and increased website speed.',
        'Optimised job-request process, resulting in 1,200+ TV repair requests being recorded, verified, and pre-arranged through an automated portal, leading to a 25% increase in customer communication efficiency and a reduction of manual labour.',
        "Oversaw comprehensive overhaul and implementation of the company's Enterprise Resource Planning system, including crafting comprehensive written proposals for key clients, providing on-call support during the transition period, and establishing new procedures and processes, culminating in the successful completion of the project.",
        'Assumed the role of Senior Developer, providing external clients with consulting services to set up new ERP & CRM Systems in Superbase NG, migrating from Superbase Classic.',
        'Spearheaded online marketing campaign resulting in 4,000 new users on the DK AVS website, resulting in a 20% increase in first-time customer service requests.',
      ],
    },
  ];
}
