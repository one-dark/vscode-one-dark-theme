import java.util.*;

public class code {
  public static void main (String[] args) {
    List<String> list = createList();

    System.out.println(list);
  }

  private static List<String> createList() {
    List<String> list = new ArrayList<>();

    list.add("foo");
    list.add("bar");

    return list;
  }
}