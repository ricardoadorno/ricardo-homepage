import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      header: {
        locale: {
          en: 'English',
          pt: 'Portuguese',
        },
        navItems: {
          technologies: 'Technologies',
          about: 'About Me',
          contact: 'Contact',
          projects: 'Projects',
        },
      },
      hero: {
        header: 'Fullstack Developer driven by technology',
        lead: 'Seeking challenges that drive me and promote personal growth and opportunities to share knowledge and achievements',
        buttonPrimary: 'Projects',
        buttonSecondary: 'Contact',
      },
      headings: {
        technologies: 'Technologies',
        about: 'About Me',
        contact: 'Contact',
        projects: 'Projects',
      },

      technologies: {
        items: {
          html: {
            title: 'HTML5/CSS3',
            description: 'Markup language for web development',
          },
          javascript: {
            title: 'Typescript',
          },
          react: {
            title: 'React',
          },
          vue: {
            title: 'Vue',
          },
          node: {
            title: 'Node.js',
          },

          nest: {
            title: 'Nest',
          },
          sql: {
            title: 'PostgreSQL',
          },

          test: {
            title: 'Jest',
          },

          docker: {
            title: 'Docker',
            description: 'Docker',
          },

          git: {
            title: 'Git',
            description: 'Git',
          },

          tailwind: {
            title: 'Tailwind',
            description: 'Tailwind',
          },

          figma: {
            title: 'Figma',
            description: 'Online prototyping tool',
          },
        },
      },

      projects: {
        items: {
          spotifyApi: {
            subtitle: 'Consuming API',
            title: 'Spotify API',
            lead: 'A simple web application that uses the Spotify API to search for artists and their albums.',
          },
          realtimeChat: {
            subtitle: 'Realtime Chat',
            title: 'Realtime Chat',
            lead: 'A simple chat application that uses WebSockets to send and receive messages in real-time.',
          },
        },
        ctaButton: 'Check it out!',
      },

      about: {
        header: 'Hello, I am Ricardo!',
        content: {
          p1: 'As a Fullstack Developer, I am driven by technology and learning, showing interest in both Front-End and Back-End stacks. I am looking for challenges that drive me and promote personal growth, as well as opportunities to share knowledge and achievements.',
          p2: 'My experience covers web development, especially in Javascript and Typescript, with proficiency in UI frameworks like React and Vue, as well as Node.js frameworks like Express and Nest. I also have skills in UI development and prototyping, using Figma. My competencies also include handling SQL databases like PostgreSQL, and NoSQL like MongoDB, and building REST APIs. Additionally, I have knowledge in technologies like Java, Spring, and Angular.',
          p3: 'Currently, my area of interest has been the study of software architecture and principles like SOLID, Clean Code, and best practices in software engineering.',
        },
      },

      contact: {
        header: 'Chat with me!',
        lead: 'I am always open to talk about technology and new ideas. Feel free to contact me.',
      },

      socials: {
        linkedin: 'https://www.linkedin.com/in/ricardo-adorno/?locale=en_US',
        github: 'https://github.com/ricardoadorno',
        whatsapp:
          'https://api.whatsapp.com/send/?phone=5575992420658&text&type=phone_number&app_absent=0',
      },
    },
    pt: {
      header: {
        locale: {
          en: 'Inglês',
          pt: 'Português',
        },
        navItems: {
          technologies: 'Tecnologias',
          about: 'Sobre Mim',
          contact: 'Contato',
          projects: 'Projetos',
        },
      },
      hero: {
        header: 'Desenvolvedor Fullstack impulsionado por tecnologia',
        lead: 'Em busca de desafios que me impulsionem e promovam crescimento pessoal e oportunidades para compartilhar conhecimento e conquistas',
        buttonPrimary: 'Projetos',
        buttonSecondary: 'Contato',
      },
      headings: {
        technologies: 'Tecnologias',
        about: 'Sobre Mim',
        contact: 'Contato',
        projects: 'Projetos',
      },

      technologies: {
        items: {
          html: {
            title: 'HTML5/CSS3',
            description: 'Linguagem de marcação para desenvolvimento web',
          },
          javascript: {
            title: 'Typescript',
          },
          react: {
            title: 'React',
          },
          vue: {
            title: 'Vue',
          },
          tailwind: {
            title: 'Tailwind',
          },
          node: {
            title: 'Node.js',
          },

          nest: {
            title: 'Nest',
          },
          sql: {
            title: 'PostgreSQL',
          },

          test: {
            title: 'Jest',
          },

          docker: {
            title: 'Docker',
          },

          git: {
            title: 'Git',
          },

          figma: {
            title: 'Figma',
          },
        },
      },

      projects: {
        ctaButton: 'Vem ver!',
      },

      about: {
        header: 'Olá, sou Ricardo!',
        content: {
          p1: 'Como um Desenvolvedor Fullstack, sou impulsionado pela tecnologia e pelo aprendizado, demonstrando interesse tanto nas stacks de Front-End quanto Back-End. Estou em busca de desafios que me impulsionem e promovam crescimento pessoal, além de oportunidades para compartilhar conhecimento e conquistas.',
          p2: 'Minha experiência abrange o desenvolvimento web, especialmente em Javascript e Typescript, com proficiência em frameworks de UI como React e Vue, assim como em frameworks Node.js, como Express e Nest. Além disso, possuo habilidades em desenvolvimento de UI e prototipação, utilizando o Figma. Minhas competências também incluem a manipulação de bancos de dados SQL, como o PostgreSQL, e NoSQL, como o MongoDB e construções de APIs REST. Além disso, tenho conhecimentos em tecnologias como Java, Spring e Angular.',
          p3: 'Atualmente, minha área de interesse tem sido o estudo de arquitetura de software e princípios como o SOLID, Clean Code e boas práticas em engenharia de software.',
        },
      },

      contact: {
        header: 'Vamos conversar!',
        lead: 'Estou sempre aberto para conversar sobre tecnologia e sugestões. Sinta-se à vontade para entrar em contato comigo.',
      },

      socials: {
        linkedin: 'https://www.linkedin.com/in/ricardo-adorno',
        github: 'https://github.com/ricardoadorno',
        whatsapp:
          'https://api.whatsapp.com/send/?phone=5575992420658&text&type=phone_number&app_absent=0',
      },
    },
  },
});

export default i18n;
