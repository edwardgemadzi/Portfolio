"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { jobs, jobCategories, jobLocations, jobTypes, type Job } from "@/data/jobs";
import { toast } from "sonner";
import { Search, MapPin, Clock, Briefcase, DollarSign, X, Filter, Plus, ChevronRight } from "lucide-react";

function TypeBadge({ type }: { type: Job["type"] }) {
  const colors: Record<Job["type"], string> = {
    "Full-time": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    "Part-time": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    Remote: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    Contract: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border border-transparent ${colors[type]}`}>
      {type}
    </span>
  );
}

function JobCard({ job, onSelect }: { job: Job; onSelect: (j: Job) => void }) {
  return (
    <button
      className="w-full text-left p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
      onClick={() => onSelect(job)}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl shrink-0 mt-0.5">{job.logo}</div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{job.title}</h3>
              <p className="text-xs text-muted-foreground">{job.company}</p>
            </div>
            <TypeBadge type={job.type} />
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
            <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.postedDate}</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">{job.category}</Badge>
          </div>
        </div>
      </div>
    </button>
  );
}

function ApplyModal({
  job,
  open,
  onClose,
}: {
  job: Job | null;
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", cover: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success("Application submitted! 🎉", {
      description: `Your application for ${job?.title} at ${job?.company} has been received.`,
    });
    setForm({ name: "", email: "", cover: "" });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Apply for {job?.title}</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground mb-4">
          {job?.company} · {job?.location}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="aname">Full Name *</Label>
            <Input id="aname" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} disabled={loading} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="aemail">Email Address *</Label>
            <Input id="aemail" type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} disabled={loading} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="acover">Cover Letter</Label>
            <Textarea id="acover" placeholder="Tell us why you're a great fit for this role..." rows={5} value={form.cover} onChange={(e) => setForm({ ...form, cover: e.target.value })} disabled={loading} />
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1 gap-2">
              {loading ? (
                <><span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />Submitting...</>
              ) : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function PostJobModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ title: "", company: "", location: "", type: "Full-time", salary: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.company) {
      toast.error("Please fill in the job title and company.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast.success("Job posted! ✅", {
      description: "Your listing will be reviewed and published within 24 hours.",
    });
    setForm({ title: "", company: "", location: "", type: "Full-time", salary: "", description: "" });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Post a New Job</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="jtitle">Job Title *</Label>
              <Input id="jtitle" placeholder="e.g. Frontend Developer" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} disabled={loading} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="jcompany">Company *</Label>
              <Input id="jcompany" placeholder="Your company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} disabled={loading} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="jlocation">Location</Label>
              <Input id="jlocation" placeholder="e.g. Accra or Remote" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} disabled={loading} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="jtype">Job Type</Label>
              <select id="jtype" className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} disabled={loading}>
                {["Full-time", "Part-time", "Remote", "Contract"].map((t) => (<option key={t}>{t}</option>))}
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="jsalary">Salary Range</Label>
            <Input id="jsalary" placeholder="e.g. GHS 5,000 – 8,000/mo" value={form.salary} onChange={(e) => setForm({ ...form, salary: e.target.value })} disabled={loading} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="jdesc">Job Description</Label>
            <Textarea id="jdesc" placeholder="Describe the role, requirements, and responsibilities..." rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} disabled={loading} />
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading} className="flex-1">Cancel</Button>
            <Button type="submit" disabled={loading} className="flex-1 gap-2">
              {loading ? <><span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />Posting...</> : <><Plus className="w-4 h-4" />Post Job</>}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All" || job.category === categoryFilter;
      const matchesLocation = locationFilter === "All" || job.location === locationFilter;
      const matchesType = typeFilter === "All" || job.type === typeFilter;
      return matchesSearch && matchesCategory && matchesLocation && matchesType;
    });
  }, [search, categoryFilter, locationFilter, typeFilter]);

  const clearFilters = () => {
    setSearch("");
    setCategoryFilter("All");
    setLocationFilter("All");
    setTypeFilter("All");
  };

  const hasFilters = search || categoryFilter !== "All" || locationFilter !== "All" || typeFilter !== "All";

  const FilterPanel = () => (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</h3>
        {hasFilters && (
          <button onClick={clearFilters} className="text-xs text-primary hover:underline">
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-xs text-muted-foreground uppercase tracking-wider">Category</Label>
        <div className="flex flex-wrap gap-1.5">
          {jobCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                categoryFilter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs text-muted-foreground uppercase tracking-wider">Location</Label>
        <div className="flex flex-col gap-1">
          {jobLocations.map((loc) => (
            <button
              key={loc}
              onClick={() => setLocationFilter(loc)}
              className={`text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                locationFilter === loc
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-accent text-muted-foreground"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs text-muted-foreground uppercase tracking-wider">Job Type</Label>
        <div className="flex flex-col gap-1">
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                typeFilter === type
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-accent text-muted-foreground"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        {/* Header */}
        <div className="bg-card/50 border-b border-border py-10 px-4">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
                  <Briefcase className="w-8 h-8 text-primary" />
                  Job Board
                </h1>
                <p className="text-muted-foreground mt-1">
                  Find your next opportunity in Ghana and beyond
                </p>
              </div>
              <Button onClick={() => setPostOpen(true)} className="gap-2">
                <Plus className="w-4 h-4" />
                Post a Job
              </Button>
            </div>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-8">
          {/* Mobile filter toggle */}
          <div className="md:hidden mb-4">
            <Button
              variant="outline"
              className="gap-2 w-full"
              onClick={() => setMobileFilters(!mobileFilters)}
            >
              <Filter className="w-4 h-4" />
              {mobileFilters ? "Hide Filters" : "Show Filters"}
              {hasFilters && <span className="ml-auto w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">!</span>}
            </Button>
            {mobileFilters && (
              <div className="mt-3 p-4 rounded-xl border border-border bg-card">
                <FilterPanel />
              </div>
            )}
          </div>

          <div className="flex gap-6">
            {/* Sidebar filters - desktop */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24 p-5 rounded-xl border border-border bg-card">
                <FilterPanel />
              </div>
            </aside>

            {/* Job list + detail */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{filteredJobs.length}</span> job
                  {filteredJobs.length !== 1 ? "s" : ""} found
                </p>
              </div>

              {filteredJobs.length === 0 ? (
                <div className="text-center py-20 space-y-3">
                  <div className="text-5xl">🔍</div>
                  <p className="font-medium">No jobs match your filters</p>
                  <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid gap-3">
                  {filteredJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      onSelect={(j) => setSelectedJob(j)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Job Detail Modal */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-3">
                  <span className="text-4xl">{selectedJob.logo}</span>
                  <div>
                    <DialogTitle className="text-xl">{selectedJob.title}</DialogTitle>
                    <p className="text-primary font-medium mt-0.5">{selectedJob.company}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="flex flex-wrap gap-2 mt-2">
                <TypeBadge type={selectedJob.type} />
                <Badge variant="secondary">{selectedJob.category}</Badge>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{selectedJob.location}</span>
                <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5" />{selectedJob.salary}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />Posted {selectedJob.postedDate}</span>
              </div>

              <div className="space-y-4 mt-2">
                <div>
                  <h4 className="font-semibold mb-2">About the Role</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Responsibilities</h4>
                  <ul className="space-y-1">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <Button
                  className="flex-1 gap-2"
                  onClick={() => {
                    setApplyOpen(true);
                  }}
                >
                  Apply Now
                </Button>
                <Button variant="outline" onClick={() => setSelectedJob(null)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Apply modal */}
      <ApplyModal
        job={selectedJob}
        open={applyOpen}
        onClose={() => {
          setApplyOpen(false);
          setSelectedJob(null);
        }}
      />

      {/* Post job modal */}
      <PostJobModal open={postOpen} onClose={() => setPostOpen(false)} />

      <Footer />
    </>
  );
}
