// © 2026 VERADPRO Software Solutions. All rights reserved.
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: '☕',
      title: 'Enterprise Java Development',
      description: 'Full-cycle Java/Spring Boot development for enterprise-grade applications. Clean architecture, robust APIs, and scalable backends built to last.'
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture & Migration',
      description: 'Designing and migrating applications to AWS and modern cloud infrastructure. Multi-cloud strategies, cost optimisation, and zero vendor lock-in.'
    },
    {
      icon: '🤖',
      title: 'AI-Driven Development',
      description: 'Integrating intelligent automation and AI capabilities into your existing workflows. GDPR-compliant, European-hosted solutions built for the future.'
    },
    {
      icon: '🔗',
      title: 'API & Integration Services',
      description: 'REST and SOAP web service design, IBM MQ messaging, and seamless third-party integrations. Connecting your systems reliably and securely.'
    },
    {
      icon: '⚙️',
      title: 'DevOps, CI/CD & Containerisation',
      description: 'End-to-end DevOps pipelines using Jenkins, GitHub Actions and Maven. Containerised deployments with Docker and Kubernetes orchestration for scalable, resilient infrastructure.'
    },
    {
      icon: '🔄',
      title: 'Application Modernisation',
      description: 'Transforming legacy systems into modern, maintainable Angular frontends and microservices. Incremental migration with zero disruption to operations.'
    }
  ];
}