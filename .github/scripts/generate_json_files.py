import json
import os

import markdown_to_json


def markdown_table_to_dict(table: str) -> dict:
    lines = table.split("\n")
    headers = lines[0].split("|")[1:-1]

    for line in lines[2:]:
        unstriped_dict = dict(zip(headers, line.split("|")[1:-1]))
        return {key.strip(): value.strip() for key, value in unstriped_dict.items()}


def transform_dict_with_title(d: dict) -> dict:
    result = {}

    for key, value in d.items():
        result["title"] = key
        result.update(value)

    return result


def generate_json_file(language: str):
    if language not in ["en", "fr"]:
        raise ValueError("Language must be either 'en' or 'fr'")

    cwd = os.getcwd()
    path = os.path.join(cwd, "chapters")
    files = os.listdir(path)
    files = [
        file
        for file in files
        if file.startswith("BP_") and file.endswith(f"_{language}.md")
    ]
    best_practices = []

    match language:
        case "en":
            keys = ["Identifiers", "Categories", "Validation rule"]

        case "fr":
            keys = ["Identifiants", "Catégories", "Principe de validation"]

    for file in files:
        with open(os.path.join(path, file), "r") as f:
            print(f"Processing {file}")
            c = f.read()
            content = markdown_to_json.jsonify(c)
            dictified_content = transform_dict_with_title(json.loads(content))
            dictified_content["source"] = "cnumr"

            for key in keys:
                dictified_content[key] = markdown_table_to_dict(dictified_content[key])

            indications = {}

            for rule in dictified_content["Indications"].split("\n\n"):
                rule = markdown_table_to_dict(rule)
                indications.update(rule)

            dictified_content["Indications"] = indications
            best_practices.append(dictified_content)

    with open(f"json/best_practices_{language}.json", "w") as f:
        result = json.dumps(best_practices, indent=2, ensure_ascii=False).encode("utf8")
        f.write(result.decode())


if __name__ == "__main__":
    generate_json_file("en")
    generate_json_file("fr")
