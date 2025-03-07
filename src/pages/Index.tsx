
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col pt-24 animate-fade-in">
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 animate-slide-up">
            Welcome to your new CMS
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Minimal Content Management System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A clean, intuitive platform for managing your digital content with precision and ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Content',
              description: 'Manage your pages, blog posts, and digital assets',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
              ),
              delay: '0.3s'
            },
            {
              title: 'Media',
              description: 'Upload and organize your images, videos, and files',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              ),
              delay: '0.4s'
            },
            {
              title: 'Users',
              description: 'Manage user accounts, roles, and permissions',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              ),
              delay: '0.5s'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 hover:border-primary/20 hover:shadow-lg transition-all-ease animate-slide-up"
              style={{ animationDelay: item.delay }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all-ease">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="rounded-xl border border-border/50 overflow-hidden">
          <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
            <h2 className="text-lg font-medium">Recent Activity</h2>
          </div>
          <div className="divide-y divide-border/50">
            {[
              {
                title: 'Homepage content updated',
                description: 'The main hero section was modified',
                time: '2 hours ago',
                user: 'Alex Brown'
              },
              {
                title: 'New blog post published',
                description: 'Article "Design Principles" is now live',
                time: '5 hours ago',
                user: 'Sam Wilson'
              },
              {
                title: 'User permissions changed',
                description: 'Editor role was updated with new capabilities',
                time: '1 day ago',
                user: 'Jamie Taylor'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="px-6 py-4 hover:bg-muted/30 transition-colors flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                  <p className="text-sm">{item.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
