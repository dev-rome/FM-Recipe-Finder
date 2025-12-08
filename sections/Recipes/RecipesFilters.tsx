import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import RadioDropdown from "@/components/radio-dropdown/RadioDropdown";
import SearchInput from "@/components/search-input/SearchInput";

const RecipesFilters = () => {
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
            />
          </div>
          <SearchInput />
        </div>
      </Container>
    </Section>
  );
};

export default RecipesFilters;
