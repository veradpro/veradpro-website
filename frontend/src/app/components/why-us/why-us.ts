// © 2026 VERADPRO Software Solutions. All rights reserved.
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [NgFor],
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss'
})
export class WhyUsComponent {
  reasons = [
    {
      icon: '🏆',
      title: 'Enterprise-Grade Expertise',
      description: 'Proven track record across fintech, insurance, and public sector projects — delivering robust, scalable solutions that meet the highest industry standards.'
    },
    {
      icon: '🇪🇺',
      title: 'Complex Project Delivery',
      description: 'Experienced in delivering mission-critical applications for large-scale European programmes — from architecture through to production deployment.'
    },
    {
      icon: '🔒',
      title: 'Belgium-based & GDPR Compliant',
      description: 'Registered in Belgium (KBO BE1026.467.757), operating under EU law. Your data and your clients\' data stays secure and compliant.'
    },
    {
      icon: '⚡',
      title: 'Agile, Focused & Professional',
      description: 'Dedicated senior-level expertise at every stage of your project. Fast decision-making, clear communication, and full accountability from start to finish.'
    }
  ];
}