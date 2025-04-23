import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App 컴포넌트", () => {
  it("Vite와 React 로고가 렌더링되어야 한다", () => {
    render(<App />);
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });

  it("올바른 제목이 표시되어야 한다", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("버튼 클릭 시 카운터가 증가해야 한다", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("count is 0");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });

  it("도움말 텍스트가 표시되어야 한다", () => {
    render(<App />);
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/)
    ).toBeInTheDocument();
  });
});
