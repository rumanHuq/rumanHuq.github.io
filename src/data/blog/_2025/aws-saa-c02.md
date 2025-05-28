---
title: How I passed the AWS Solution Architect Associate Exam
description: Let's dive into my journey to achieve SAA-C02. The Do's, don'ts and everything inbetween
pubDatetime: 2025-05-28T11:53:42.739Z
tags:
  - devops
  - aws
---
<div><img src="/saa-c02-result.jpeg" alt="My solution architect assoicate exam result showing I got 802 with a passmark"></img><div/>

## How it all started

I’ve been coding for a while now—mostly in the frontend world, with occasional forays into the backend. Over the years, I’ve worked on SaaS platforms, e-commerce products, and even hybrid mobile application solutions for clients, taking on both frontend and backend roles.

Surprisingly, despite all this experience, I never really leaned into understanding how my code reaches end users. I have a decent grasp of networking thanks to my CCNP certification, yet I’d never explored anything related to DevOps.

About three months ago, I decided it was time to change that. While I wasn’t quite ready to commit to hands-on coding with Infrastructure as Code (IaC), I found myself deeply interested in solution architecture. That’s when I began preparing for the AWS SAA-C02 certification exam.

## How did I study - in a nutshell

I picked up the well-respected courses by Stephane Maarek and Adrian Cantrill. I started with Cantrill’s course—watched all the lectures, took notes, and deepened my understanding of certain topics using resources like ChatGPT, YouTube, and documentation.

After finishing that, I moved on to Stephane’s course and followed a similar approach. I went through the material twice, end to end, and revisited specific topics whenever I needed a refresher.

It's worth mentioning that I also bought the Tutorial Dojo practice exams—but surprisingly, I didn’t attempt a single one before taking the actual exam. Along the way, I made countless notes in Notion, covering everything I learned.

## Mistakes I Made during preparation

### Mistake #1: Sticking too long with Adrian’s course

My first mistake was relying solely on Adrian Cantrill’s course. While it's thorough, I found it too bloated and slow-paced for my taste. He tends to repeat concepts and often dives deep into areas not directly relevant to the exam. For example, he has full-length videos on BGP, IPSec, and in-depth CloudFormation—great content, but overkill for SAA-C02. In my actual exam, I only got one question related to CloudFormation.

### Mistake #2: Skipping revision

My second mistake was jumping from topic to topic without taking time to properly revise what I had already learned. I had the illusion of making fast progress, but in reality, I was forgetting concepts just as quickly—simply because I wasn’t reviewing them.

### Mistake #3: Not scheduling the exam early

Finally, I should’ve booked my exam much earlier in the learning process. Without a fixed deadline, I kept pushing things off, lost momentum, and had to keep revisiting topics I had already covered. A time-boxed schedule would’ve kept me accountable and focused.

## Things I should have done

Looking back, avoiding Adrian’s course entirely would’ve been the right call for me. It could have saved me 50–60 hours of study time. Stephane’s course alone would have been more than enough for the exam.

One thing that could have significantly boosted my retention was using flashcards. If I had created flashcards while studying—then reviewed them regularly, like before moving on to a new topic or before going to bed—I would’ve been much better prepared. It also would’ve cut down the total time I spent relearning forgotten material.

Another major mistake was skipping mock exams. I didn’t take any practice tests—neither the ones from Stephane’s course nor the Tutorial Dojo set. I'm confident I would’ve gone into the exam with more confidence and a sharper understanding if I’d used those to identify and fill my knowledge gaps.

And finally, I can't stress this enough: book your exam early. A fixed date gives you focus and urgency. In the worst-case scenario, if you're not feeling ready, you can reschedule—but keep in mind that AWS only allows you to change the exam date twice.

## The Exam itself

The exam had a heavy focus on **cost optimization** and **high availability**. Many questions started with scenarios like:

> *"Company XYZ has a multi-AZ Auto Scaling group with `n` EC2 instances, along with S3, RDS, etc. They’re experiencing a spike in incoming requests on weekends. What’s the best way to make the system <**FAST || CHEAP**>?"*

In preparation, make sure you deeply understand:

* **EC2 placement groups** (cluster, spread, partition)
* **Provisioned vs On-Demand resources**
* **S3 lifecycle policies**
* **RDS: Multi-AZ vs Read Replicas**
* **VPC fundamentals**
* **Serverless offerings (Lambda, API Gateway, etc.)**

I’ll say it again: **learn everything** about these topics. They’re not just exam content—they’re core to how real-world cloud applications are built and scaled.

Most of the other topics—like IAM, firewalls, or machine learning—are fairly straightforward. Knowing what they are and what they’re used for is usually enough.

## You can do it

This journey taught me that certification isn't just about passing an exam—it's about thinking like a systems architect. Focus on real-world understanding, revise smart, and don’t wait too long to book your test. If I can do it, so can you.
