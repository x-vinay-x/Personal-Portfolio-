"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import { itemAnimation } from './Animations';

export const ProjectCard = ({ project, index }) => (
    <motion.div
        variants={itemAnimation}
        className="group flex flex-col sm:flex-row items-stretch gap-6 bg-secondary/5 hover:bg-secondary/10 p-4 rounded-xl transition-colors duration-300"
    >
        <div className="sm:w-1/3">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
        </div>

        <div className="sm:w-2/3 flex flex-col justify-between py-2">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-primary">
                            {project.title}
                        </h3>
                        {project.highlight && (
                            <div className="flex items-center gap-1 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                <FaStar className="w-3 h-3" />
                                <span>Featured</span>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {project.year && <span>{project.year}</span>}
                        <span>#{String(index + 1).padStart(2, '0')}</span>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
                {project.github && project.github !== "#" && (
                    <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full h-8 px-4 text-xs"
                        asChild
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <FaGithub className="w-3 h-3" />
                            GitHub
                        </a>
                    </Button>
                )}
                {project.demo && project.demo !== "#" && (
                    <Button
                        size="sm"
                        className="rounded-full h-8 px-4 text-xs"
                        asChild
                    >
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            Live Demo
                            <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                    </Button>
                )}
            </div>
        </div>
    </motion.div>
);