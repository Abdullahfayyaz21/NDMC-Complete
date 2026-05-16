import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  BookOpen,
  X,
  ArrowRight,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/education")({
  component: EducationPage,
});

/* =========================================================
   🎥 VIDEOS DATA
========================================================= */

const videoCategories = [
  "All Videos",
  "Implants",
  "Cosmetic",
  "Hygiene",
  "Surgery",
];

const videoTopics = [
  "Dental Implants Explained",
  "Teeth Whitening Guide",
  "Root Canal Procedure",
  "Braces & Aligners",
  "Wisdom Tooth Removal",
  "Gum Disease Treatment",
  "Smile Design Process",
  "Dental Cleaning Routine",
];

const videos = Array.from({ length: 24 }, (_, i) => {
  const topic = videoTopics[i % videoTopics.length];
  const cat = videoCategories[(i % (videoCategories.length - 1)) + 1];

  return {
    id: i + 1,
    title: `${topic} #${i + 1}`,
    cat,
    youtube: `https://www.youtube.com/results?search_query=${encodeURIComponent(
      topic
    )}`,
  };
});

/* =========================================================
   📖 ARTICLES DATA
========================================================= */

const articleCategories = [
  "All Articles",
  "Surgery",
  "Cosmetic",
  "General",
  "Hygiene",
];

const articleTopics = [
  "Dental Health Basics",
  "Implant Recovery Guide",
  "Whitening Safety Tips",
  "Braces Care Instructions",
  "Root Canal Myths",
  "Gum Disease Prevention",
  "Oral Hygiene Routine",
  "Tooth Pain Causes",
];

const articles = Array.from({ length: 24 }, (_, i) => {
  const topic = articleTopics[i % articleTopics.length];
  const cat =
    articleCategories[
    (i % (articleCategories.length - 1)) + 1
    ];

  return {
    id: i + 1,
    title: `${topic} Article ${i + 1}`,
    cat,
    content: `This article explains ${topic.toLowerCase()} in detail. It covers causes, treatment options, recovery steps, prevention methods and professional dental advice from specialists. Article number ${i + 1
      } provides advanced patient education with clear explanations.`,
  };
});

/* ========================================================= */

function EducationPage() {
  const [search, setSearch] = useState("");
  const [videoCat, setVideoCat] = useState("All Videos");
  const [articleCat, setArticleCat] =
    useState("All Articles");
  const [selectedArticle, setSelectedArticle] =
    useState<any>(null);

  const videoSectionRef = useRef<HTMLDivElement>(null);
  const articleSectionRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     SCROLL FUNCTIONS
  ========================================================= */

  const scrollToVideos = () => {
    videoSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToArticles = () => {
    articleSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================================
     FILTER VIDEOS
  ========================================================= */

  const filteredVideos = useMemo(() => {
    return videos.filter((v) => {
      const matchSearch = v.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCat =
        videoCat === "All Videos" ||
        v.cat === videoCat;

      return matchSearch && matchCat;
    });
  }, [search, videoCat]);

  /* =========================================================
     FILTER ARTICLES
  ========================================================= */

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchSearch = a.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCat =
        articleCat === "All Articles" ||
        a.cat === articleCat;

      return matchSearch && matchCat;
    });
  }, [search, articleCat]);

  return (
    <div className="pt-28 pb-24 bg-[#f7f6f4] min-h-screen">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* =========================================================
            HERO SECTION
        ========================================================= */}

        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Dental Education Center
              </span>

              <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
                Learn Through
                <span className="block text-neutral-500">
                  Videos & Articles
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Explore professional dental education
                resources including expert videos,
                oral health articles, treatment guides,
                and patient care knowledge.
              </p>

              {/* =========================================================
                  TOP NAVIGATION BUTTONS
              ========================================================= */}

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                {/* VIDEO BUTTON */}

                <button
                  onClick={scrollToVideos}
                  className="group bg-black text-white px-7 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Play className="w-5 h-5" />

                  <span className="font-medium">
                    Videos Section
                  </span>

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>

                {/* ARTICLE BUTTON */}

                <button
                  onClick={scrollToArticles}
                  className="group bg-white border border-gray-300 px-7 py-4 rounded-2xl flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
                >
                  <BookOpen className="w-5 h-5" />

                  <span className="font-medium">
                    Articles Section
                  </span>

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* SEARCH BAR */}

        <div className="mt-14 flex justify-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search videos or articles..."
            className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-black transition shadow-sm"
          />
        </div>

        {/* =========================================================
            🎥 VIDEOS SECTION
        ========================================================= */}

        <div
          ref={videoSectionRef}
          className="mt-24 scroll-mt-32"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <Play className="w-8 h-8" />
              Videos
            </h2>

            <span className="text-gray-500">
              {filteredVideos.length} Videos
            </span>
          </div>

          {/* VIDEO FILTERS */}

          <div className="flex flex-wrap gap-3 mb-10">
            {videoCategories.map((c) => (
              <button
                key={c}
                onClick={() => setVideoCat(c)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 border ${videoCat === c
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 hover:border-black"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* VIDEO GRID */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVideos.map((v) => (
              <motion.a
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                key={v.id}
                href={v.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black text-white rounded-3xl p-6 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Play className="w-6 h-6" />
                  </div>

                  <h3 className="mt-6 font-semibold text-lg leading-snug">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300">
                    {v.cat}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-green-400 text-sm font-medium">
                    Watch Video
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* =========================================================
            📖 ARTICLES SECTION
        ========================================================= */}

        <div
          ref={articleSectionRef}
          className="mt-28 scroll-mt-32"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              Articles
            </h2>

            <span className="text-gray-500">
              {filteredArticles.length} Articles
            </span>
          </div>

          {/* ARTICLE FILTERS */}

          <div className="flex flex-wrap gap-3 mb-10">
            {articleCategories.map((c) => (
              <button
                key={c}
                onClick={() => setArticleCat(c)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 border ${articleCat === c
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 hover:border-black"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* ARTICLE GRID */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((a) => (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                key={a.id}
                className="bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                    {a.cat}
                  </span>

                  <BookOpen className="w-5 h-5 text-gray-400" />
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug">
                  {a.title}
                </h3>

                <p className="mt-4 text-gray-600 line-clamp-4 leading-relaxed">
                  {a.content}
                </p>

                <button
                  onClick={() => setSelectedArticle(a)}
                  className="mt-6 flex items-center gap-2 text-black font-medium hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTICLE MODAL
      ========================================================= */}

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto p-10 rounded-[2rem] relative"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <X />
              </button>

              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                {selectedArticle.cat}
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="mt-8 text-gray-700 leading-8 text-lg">
                {selectedArticle.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}