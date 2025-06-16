'use client'

import React from 'react'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import MainLayout from "@/components/layouts/MainLayout"

const categories = [
  {
    title: 'AI Chatbots',
    tools: [
      {
        name: 'ChatGPT',
        description: 'OpenAI\'s advanced language model for natural conversations',
        price: 'Free + Plus',
        url: 'https://chat.openai.com',
        views: '64,723',
        likes: '1,664'
      },
      {
        name: 'Claude',
        description: 'Anthropic\'s AI assistant excelling in writing and analysis',
        price: 'Free + Pro',
        url: 'https://claude.ai',
        views: '20,890',
        likes: '40'
      },
      {
        name: 'Gemini',
        description: 'Google\'s multimodal AI model for text and image understanding',
        price: 'Free',
        url: 'https://gemini.google.com',
        views: '28,970',
        likes: '28'
      },
      {
        name: 'Microsoft Copilot',
        description: 'Microsoft\'s AI chat assistant and productivity tool',
        price: 'Free + Pro',
        url: 'https://copilot.microsoft.com',
        views: '33,790',
        likes: '68'
      },
      {
        name: 'Character AI',
        description: 'Create and chat with custom AI characters',
        price: 'Free + Premium',
        url: 'https://character.ai',
        views: '49,430',
        likes: '41'
      }
    ]
  },
  {
    title: 'AI Image Generation',
    tools: [
      {
        name: 'Midjourney',
        description: 'High-quality AI image generation for artistic creation',
        price: 'Paid',
        url: 'https://www.midjourney.com',
        views: '45,620',
        likes: '892'
      },
      {
        name: 'DALL-E',
        description: 'OpenAI\'s image generation model with multiple styles',
        price: 'Paid',
        url: 'https://openai.com/dall-e-3',
        views: '38,450',
        likes: '756'
      },
      {
        name: 'Stable Diffusion',
        description: 'Open-source AI image generation model',
        price: 'Free',
        url: 'https://stability.ai',
        views: '32,180',
        likes: '645'
      },
      {
        name: 'Leonardo AI',
        description: 'Professional AI art generation platform',
        price: 'Free + Premium',
        url: 'https://leonardo.ai',
        views: '28,940',
        likes: '578'
      }
    ]
  },
  {
    title: 'AI Video Generation',
    tools: [
      {
        name: 'Runway',
        description: 'Professional AI video editing and generation',
        price: 'Paid',
        url: 'https://runwayml.com',
        views: '25,670',
        likes: '513'
      },
      {
        name: 'Pika',
        description: 'User-friendly AI video generation tool',
        price: 'Paid',
        url: 'https://pika.art',
        views: '22,450',
        likes: '449'
      },
      {
        name: 'Synthesia',
        description: 'AI video generation with virtual presenters',
        price: 'Paid',
        url: 'https://www.synthesia.io',
        views: '18,920',
        likes: '378'
      }
    ]
  },
  {
    title: 'AI Audio Processing',
    tools: [
      {
        name: 'Eleven Labs',
        description: 'High-quality AI voice synthesis',
        price: 'Paid',
        url: 'https://elevenlabs.io',
        views: '21,340',
        likes: '427'
      },
      {
        name: 'Murf',
        description: 'Multilingual AI voice synthesis platform',
        price: 'Paid',
        url: 'https://murf.ai',
        views: '19,850',
        likes: '397'
      },
      {
        name: 'Descript',
        description: 'AI-powered audio and video editing',
        price: 'Free + Pro',
        url: 'https://www.descript.com',
        views: '17,630',
        likes: '353'
      }
    ]
  },
  {
    title: 'AI Writing Assistants',
    tools: [
      {
        name: 'Grammarly',
        description: 'AI-powered writing assistant and grammar checker',
        price: 'Free + Premium',
        url: 'https://www.grammarly.com',
        views: '89,450',
        likes: '1,789'
      },
      {
        name: 'Jasper',
        description: 'AI content generation for marketing and business',
        price: 'Paid',
        url: 'https://www.jasper.ai',
        views: '45,230',
        likes: '905'
      },
      {
        name: 'Copy.ai',
        description: 'AI copywriting and content generation',
        price: 'Free + Pro',
        url: 'https://www.copy.ai',
        views: '38,940',
        likes: '779'
      }
    ]
  },
  {
    title: 'AI Programming',
    tools: [
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer for code completion',
        price: 'Paid',
        url: 'https://github.com/features/copilot',
        views: '67,890',
        likes: '1,358'
      },
      {
        name: 'Cursor',
        description: 'AI-powered code editor',
        price: 'Free + Pro',
        url: 'https://cursor.sh',
        views: '53,420',
        likes: '1,068'
      },
      {
        name: 'Tabnine',
        description: 'AI code completion for multiple languages',
        price: 'Free + Pro',
        url: 'https://www.tabnine.com',
        views: '42,180',
        likes: '844'
      }
    ]
  }
]

export default function Home() {
  return (
    <MainLayout>
      <div className="py-12 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            AI Tools Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover and explore the most powerful AI tools for your creative and professional needs
          </p>
        </div>
        
        {categories.map((category, index) => (
          <div key={index} className="mb-20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold text-gradient">
                {category.title}
              </h2>
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-600 text-sm font-medium inline-flex items-center group"
              >
                View All
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
            <BentoGrid>
              {category.tools.map((tool, toolIndex) => (
                <BentoGridItem
                  key={toolIndex}
                  title={tool.name}
                  description={
                    <div className="space-y-2">
                      <p>{tool.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400">
                          {tool.price}
                        </span>
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {tool.views}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {tool.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  }
                  icon={
                    <div className="relative w-12 h-12">
                      <Image
                        src={`https://www.google.com/s2/favicons?domain=${tool.url}&sz=128`}
                        alt={`${tool.name} icon`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  }
                  url={tool.url}
                  className={toolIndex === 0 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}
