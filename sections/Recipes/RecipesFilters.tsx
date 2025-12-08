"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import RadioDropdown from "@/components/radio-dropdown/RadioDropdown";
import SearchInput from "@/components/search-input/SearchInput";

const RecipesFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [prepTime, setPrepTime] = useState(searchParams.get("prepTime") || "");
  const [cookTime, setCookTime] = useState(searchParams.get("cookTime") || "");

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
    setPrepTime(searchParams.get("prepTime") || "");
    setCookTime(searchParams.get("cookTime") || "");
  }, [searchParams]);

  const updateUrlParams = (updates: {
    search?: string;
    prepTime?: string;
    cookTime?: string;
  }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (updates.search !== undefined) {
      if (updates.search) {
        params.set("search", updates.search);
      } else {
        params.delete("search");
      }
    }

    if (updates.prepTime !== undefined) {
      if (updates.prepTime) {
        params.set("prepTime", updates.prepTime);
      } else {
        params.delete("prepTime");
      }
    }

    if (updates.cookTime !== undefined) {
      if (updates.cookTime) {
        params.set("cookTime", updates.cookTime);
      } else {
        params.delete("cookTime");
      }
    }

    router.replace(`/recipes?${params.toString()}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    updateUrlParams({ search: value });
  };

  const handlePrepTimeChange = (value: string) => {
    setPrepTime(value);
    updateUrlParams({ prepTime: value });
  };

  const handleCookTimeChange = (value: string) => {
    setCookTime(value);
    updateUrlParams({ cookTime: value });
  };

  return (
    <Section>
      <Container>
        <div className="mb-6 flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center md:justify-start">
            <RadioDropdown
              label="Max Prep Time"
              options={[
                { label: "0 minutes", value: "0" },
                { label: "5 minutes", value: "5" },
                { label: "10 minutes", value: "10" },
              ]}
              defaultValue={prepTime}
              onChange={handlePrepTimeChange}
            />
            <RadioDropdown
              label="Max Cook Time"
              options={[
                { label: "0 minutes", value: "0" },
                { label: "5 minutes", value: "5" },
                { label: "10 minutes", value: "10" },
                { label: "15 minutes", value: "15" },
                { label: "20 minutes", value: "20" },
              ]}
              defaultValue={cookTime}
              onChange={handleCookTimeChange}
            />
          </div>
          <SearchInput value={searchQuery} onChange={handleSearchChange} />
        </div>
      </Container>
    </Section>
  );
};

export default RecipesFilters;
