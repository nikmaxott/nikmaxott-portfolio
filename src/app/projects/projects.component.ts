import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio & CV',
      technologies: ['Angular', 'Tailwind', 'Github Actions'],
      description:
        'A static website built in Angular to host my CV, and for use as a portfolio. Key deliverables included: a fully responsive design, automatic dark-light mode toggles, and automatic deployments.',
    },
    {
      title: 'Django Blog and Library Project',
      technologies: ['Python', 'Bulma', 'Github Actions', 'Azure'],
      description:
        'Based on the MDN Django Tutorial this pair of apps is a foray into Python development, hosted on Azure Web Apps and deployed via both Github Actions and Gitlab Runners. Using Bulma UI for styling. Furthermore this process was outlined in a LinkedIn article.',
      link: {
        url: 'https://www.linkedin.com/pulse/building-library-site-blog-azure-django-nikolaus-maxim-zolnhofer',
        text: 'LinkedIn Article',
      },
      image: {
        src: 'https://www.nikmaxott.org/wp-content/uploads/2023/09/Screenshot-2023-09-18-at-14-25-39-Django-Blog.png',
        alt: 'Screenshot of a blog post in the Django Blog Project',
      },
    },
    {
      title: 'Repair Portal - ERP System for TV Repairs',
      technologies: ['React', 'Superbase'],
      description:
        'A project with a React frontend, and a custom Superbase backend, with full authentication and user management. Hosted on premises, highlights include allowing field technicians to take pictures, get customer signatures, and optimisation of drivers daily routes based on starting and ending location, including parts pickup.',
      image: {
        src: 'https://i0.wp.com/www.nikmaxott.org/wp-content/uploads/2022/07/Screenshot-2022-07-31-at-13-18-15-Superbase-Repair-Portal.png',
        alt: 'Screenshot of Superbase Repair Portal, showing Account Settings',
      },
    },
    {
      title: 'Superbase Shop - SaaS Shop Design',
      technologies: ['Gatsby', 'Bootstrap', 'Auth0'],
      description:
        'A project where I used Gatsby.JS to create a static site, hosted on-premises. The site showcases several key products of the Superbase brand. This project was a nice challenge and a change of pace from my normal work at the time, and showcases my stylistic choices, preferring a minimal look.',
      link: {
        url: 'https://shop.superbase.com/',
        text: 'shop.superbase.com',
      },
      image: {
        src: 'https://i0.wp.com/www.nikmaxott.org/wp-content/uploads/2022/07/image-2.png',
        alt: 'Screenshot of shop.superbase.com showcasing the Repair Portal product',
      },
    },
  ];
}

interface Project {
  title: string;
  technologies: string[];
  description: string;
  link?: {
    url: string;
    text: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}
